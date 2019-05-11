import React from 'react';
import CardItem from './CardItem';
import Grid from '@material-ui/core/Grid';
import Pagination from './Pagination';

const Publications = ({data, page, onPrev, onNext, path}) => {

    const rows = [];

    for(let dataIndex = page * 6; dataIndex < data.length && rows.length < 6; dataIndex++) {

        let item = data[dataIndex];

        rows.push(
                <Grid key={rows.length} container xs={12} sm={12} md={12} lg={12} justify="center">
                    <CardItem key={dataIndex} item={item} path={path} />
                </Grid>
        );
    }

    return(
        <>
            <Pagination data={data} page={page} onPrev={onPrev} onNext={onNext} />
            {rows}
            <Pagination data={data} page={page} onPrev={onPrev} onNext={onNext} />
        </>
    );
};

export default Publications;
