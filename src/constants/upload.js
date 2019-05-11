import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const FileUpload = () => (
    <Mutation
        mutation={gql`
        mutation($files: [Upload!]!) {
        uploadFiles(files: $files) {
        success
        }
        }
        `}
        >
        {mutate => (
            <input
                type="file"
                multiple
                required
                onChange={({ target: { validity, files } }) =>
                validity.valid && mutate({ variables: { files } })
                }
                />
        )}
    </Mutation>
);

export default FileUpload;
