import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { PanelView } from '../index';
import { Panel } from '../panel';
import {
    builtInOutputPanel,
    builtInPanelToolbox,
    IPanel,
    PanelModel,
} from 'mo/model/workbench/panel';
import { builtInPanelProblems } from 'mo/model/problems';
import { MoleculeProvider } from 'mo';
import { select } from 'mo/common/dom';

function panelMockModel(): PanelModel {
    const output = builtInOutputPanel();
    const problems = builtInPanelProblems();
    const toolboxResize = builtInPanelToolbox();
    return new PanelModel(output, [output, problems], toolboxResize);
}

describe('Test Panel Component', () => {
    test('Match the PanelView snapshot', () => {
        const component = renderer.create(
            <MoleculeProvider>
                <PanelView />
            </MoleculeProvider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Test PanelView render', () => {
        render(
            <MoleculeProvider>
                <PanelView />
            </MoleculeProvider>
        );
        expect(select<HTMLDivElement>('.mo-tab__item')!.textContent).toBe(
            builtInPanelProblems().name
        );
    });

    test('Match the Panel snapshot', () => {
        const component = renderer.create(<Panel {...panelMockModel()} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Customize the Panel toolbox', () => {
        const panel: IPanel = new PanelModel();
        const output = builtInOutputPanel();
        panel.toolbox = builtInPanelToolbox();
        panel.current = output;
        const { queryByText, container, rerender } = render(
            <Panel {...panel} />
        );
        expect(queryByText('box1')).not.toBeInTheDocument();

        output.toolbox = [{ id: 'box1', name: 'box1' }];
        rerender(<Panel {...panel} />);
        expect(container.querySelector('#box1')).toBeInTheDocument();

        document.body.innerHTML = '';
        panel.toolbox = undefined;
        rerender(<Panel {...panel} />);
        expect(container.querySelector('#box1')).not.toBeInTheDocument();
    });

    test('Customize the Panel render content', () => {
        const panel = panelMockModel();
        const { container, rerender, getAllByText } = render(
            <Panel {...panel} />
        );
        expect(
            container.querySelector('.mo-monaco-editor')
        ).toBeInTheDocument();

        panel.current!.renderPane = () => <span>customizedPane</span>;
        rerender(<Panel {...panel} />);
        expect(
            container.querySelector('.mo-monaco-editor')
        ).not.toBeInTheDocument();
        // The customizedPane element are rendered in two places(mo-panel__container/mo-tabs__content),
        // so the expect value is 2
        expect(getAllByText('customizedPane').length).toBe(2);
    });

    test('Sort the Panel ', () => {
        const current = { id: '1', name: 'test1' };
        const panel2 = { id: '2', name: 'test2' };

        const panel = new PanelModel(current, [current, panel2]);

        const { container, rerender } = render(<Panel {...panel} />);
        const tabs = container.querySelectorAll<HTMLDivElement>(
            '.mo-tab__item'
        );
        expect(tabs![0].textContent).toEqual('test1');
        expect(tabs![1].textContent).toEqual('test2');

        panel.data[0].sortIndex = 2;
        panel.data[1].sortIndex = 1;

        rerender(<Panel {...panel} />);
        const tabs1 = container.querySelector<HTMLDivElement>('.mo-tab__item');
        expect(tabs1!.textContent).toEqual('test2');
    });
});
