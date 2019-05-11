import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

const ContactView = ({ classes, contactOpen, closeContact }) => {

    return(
        <>
            <Dialog
                open={contactOpen}
                onClose={closeContact}
                aria-labelledby="contact-dialog"
            >
                <DialogTitle>
                    Questions?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Contact me:
                    </DialogContentText>
                        <form id="contact-form" action="https://www.tommisaaskilahti.fi/email" method="POST" className={classes.container} noValidate autoComplete="off">
                            <TextField name="name"
                                       label="Name"
                                       className={classes.textField}
                                       margin="normal"
                                       variant="outlined"
                            >
                            </TextField>
                            <TextField name="email"
                                       label="Email"
                                       className={classes.textField}
                                       margin="normal"
                                       variant="outlined"
                            >
                            </TextField>
                            <TextField name="message"
                                       label="Message"
                                       style={{ margin: 8 }}
                                       fullWidth
                                       className={classes.textField}
                                       margin="normal"
                                       variant="outlined"
                            >
                            </TextField>
                            <Button type="submit" color="secondary">
                                Send
                            </Button>
                        </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

ContactView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactView);
