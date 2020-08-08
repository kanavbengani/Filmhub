import React from "react";

const load = () => {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>File Upload</title>
        </head>
        <body>
          <div class="container">
            <div class="row">
              <div class="col-md-6 m-auto">
                <h1>File Uploads</h1>
                <form
                  action="/upload"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <div class="custom-file mb-3">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      class="custom-file-input"
                    />
                    <label for="file" class="custom-file-label">
                      Choose File
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    class="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};

export default load;
