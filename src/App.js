import React, { Component, Fragment, useState } from 'react';
import { SimpleWrapper } from './component/SimpleWrapper';
import { Search } from './component/Search/Search';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import './asset/purchase.scss';

const App = (props) => {
  const [listData, setListData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [tc, setTc] = useState(0);
  const [page, setPage] = useState(1);

  const onChangePage = () => {

  }

  return (
    <Fragment className="card-box m-3">
      <SimpleWrapper sectionHeading="EAN List">
        <div className="table-responsive-md pt-4">
          <Grid
              className="na"
              data={listData}
              navigatable={true}
              onPageChange={onChangePage}
              pageable={{
              buttonCount: 5,
              info: true,
              previousNext: true,
              type: 'input',
              pageSizes: [10, 25, 50]
              }}
              skip={(page - 1) * rowsPerPage}
              take={rowsPerPage}
              total={tc}
              style={{
              width: '100%'
          }}>
              <Column
                  field="ean"
                  title="EAN"/>
              <Column field="sku" title="SKU" />
              <Column field="assigned" title="Assigned"/>
              <Column field="status" title="Status" />
          </Grid>
      </div>
      </SimpleWrapper>
    </Fragment>
  );
}

export default App;
