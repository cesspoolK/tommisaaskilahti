import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/core/SvgIcon/SvgIcon";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Pagination = ({ data, page, onPrev, onNext }) => {

    const maxPage = data.length / 6 - 1;
    const minPage = 0;

    return(
        <>
            <Grid container justify="center" spacing={24}>

                {page === 0 && <Button size="medium" disabled>
                    <KeyboardArrowLeft />
                    Back
                </Button>}

                {page > 0 && <Button size="medium" onClick={onPrev}>
                    <KeyboardArrowLeft />
                    Back
                </Button>}

                {page <= minPage && <Button disabled>...</Button>}
                {page > minPage && <Button onClick={onPrev}>{page}</Button>}
                {page + 1 && <Button disabled>{page + 1}</Button>}
                {page < maxPage && <Button onClick={onNext}>{page + 2}</Button>}
                {page >= maxPage && <Button disabled>...</Button>}

                {page >= maxPage && <Button size="medium" color={"secondary"} disabled>Next
                    <KeyboardArrowRight />
                </Button>}

                {page <  maxPage && <Button size="medium" onClick={onNext}>Next
                    <KeyboardArrowRight />
                </Button>}

            </Grid>
        </>
    )
};

export default Pagination;