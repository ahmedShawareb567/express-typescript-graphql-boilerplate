const mailLayout = (html: any) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mail App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
        />
        <style>
        body,
        html {
            font-family: "Roboto", sans-serif;
        }
        </style>
    </head>
    <body>
        <div class="mail">
        <div class="mail-header">
            <h2>Mail header</h2>
        </div>
        <div class="mail-body">
            <p>Mail body</p>
            ${html}
        </div>
        <div class="mail-footer">
            <h3>Mail footer</h3>
        </div>
        </div>
    </body>
    </html>
`;

export { mailLayout };
