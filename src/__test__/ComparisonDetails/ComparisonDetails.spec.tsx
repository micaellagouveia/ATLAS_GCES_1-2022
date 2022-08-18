import React from 'react';
import { render } from '@testing-library/react';
import { sidebarContext } from '@store/sidebarContext';
import { comparisonContext } from '@store/comparisonContext';
import { selectedDistrictsContext } from '@store/district/selectedContext';
import { BrowserRouter } from 'react-router-dom';
import {
    districtMock,
    comparisonMock,
    sidebarOpenMock
} from './mockData';

import Sidebar from '@components/Sidebar';


describe('ComparisonDetails', () => {
    test('Test if comparisonDetails is show static texts', async () => {
        const { findByText } = render(
            <BrowserRouter>
                <selectedDistrictsContext.Provider value={districtMock}>
                    <comparisonContext.Provider value={comparisonMock}>
                        <sidebarContext.Provider value={sidebarOpenMock}>
                            <Sidebar isComparisonMode={true} title="Atlas" />
                        </sidebarContext.Provider>
                    </comparisonContext.Provider>
                </selectedDistrictsContext.Provider>
            </BrowserRouter>
        );

        expect(await findByText('Comparando Regiões')).toBeTruthy();
        expect(await findByText('Comparação')).toBeTruthy();
        expect(await findByText('Viçosa')).toBeTruthy();
        expect(await findByText('Canguçu')).toBeTruthy();
    });

});
