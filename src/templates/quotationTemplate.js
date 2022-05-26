module.exports = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            margin: 0px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        .quotation-card-wrap {
            margin: 15px;
            background-color: #ffffff;
            border: 1px solid #b5b5b5;
            border-radius: 20px;
            padding: 10px 30px;
        }

        .quotation-card-wrap .quotation-card-logo-wrap {
            display: flex;
            gap: 15px;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        .quotation-card-wrap .quotation-card-logo-wrap img {
            max-width: 200px;
            width: 100%;
            padding: 1px 0px 5px 0px;
            border-top: 1px solid #80c44d;
            border-bottom: 1px solid #e5e5e5;

        }

        .quotation-card-wrap .quotation-card-logo-wrap .quotation-card-logo-text {
            font-size: 22px;
            font-weight: 700;
            color: #565656;
        }

        .quotation-card-wrap .quotation-card-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .quotation-row-wrap {
            display: flex;
            align-items: flex-start;
            margin: 1em 0em;
        }

        .quotation-row-wrap .quotation-row-title {
            margin: 0px;
            width: 20%;
            min-width: 120px;
            font-size: 15px;
            font-weight: 500;
        }

        .quotation-row-wrap .quotation-row-desc {
            flex-grow: 1;
        }

        .quotation-row-desc .quotation-row-desc-text,
        .quotation-row-desc .quotation-row-link,
        .quotation-row-desc ul {
            margin: 0px;
            margin-bottom: 1em;
        }

        .quotation-row-wrap .quotation-row-desc ul,
        .quotation-row-wrap .quotation-row-desc ol {
            padding-left: 1em;
            list-style-position: inside;
        }

        .quotation-row-wrap .quotation-row-desc li {
            margin-bottom: 0.5em;
            position: relative;
            line-height: 1.3em;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .quotation-row-wrap .quotation-row-desc li .delete-icon {
            display: none;
            color: #dd2e2e;
            font-size: 20px;
            cursor: pointer;
        }

        .quotation-row-wrap .quotation-row-desc li::before {
            content: "";
            height: 7px;
            width: 7px;
            border-radius: 50%;
            color: inherit;
            background-color: currentColor;
            position: absolute;
            transform: translateX(calc(-100% - 7px)) translateY(-50%);
            top: 50%;

        }

        .quotation-row-wrap .quotation-row-desc ul li::marker,
        .quotation-row-wrap .quotation-row-desc ol li::marker {
            font-size: 20px;
        }

        .quotation-row-wrap .quotation-row-link {
            /* text-decoration: underline; */
            color: #000000;
            font-weight: 700;
        }

        .terms-and-conditions-wrap>span {
            font-weight: 700;
            font-size: 14px;
        }

        .terms-and-conditions-wrap ul,
        .terms-and-conditions-wrap ol {
            padding-left: 20px;
            list-style-position: inside;
            font-size: 12px;
            margin-top: 5px;
        }
    </style>
</head>

<body>
    <div class="quotation-card-wrap">
        <div class="quotation-card-logo-wrap"><img
                src="https://vvmprodstracc.blob.core.windows.net/managex/assets/EmailTemplate/Logo.png" alt=""><span
                class="quotation-card-logo-text">Quotation</span></div>
        <div class="quotation-row-wrap">
            <h3 class="quotation-row-title">Reference#:</h3>
            <div class="quotation-row-desc">
                <h5 class="quotation-row-link">{{refNum}}</h5>
            </div>
        </div>
        <div class="quotation-row-wrap">
            <h3 class="quotation-row-title">Service Name:</h3>
            <div class="quotation-row-desc">
                <h5 class="quotation-row-desc-text">{{serviceName}}</h5>
                <ul>
                    {{subServiceName}}
                </ul>
            </div>
        </div>
        <div class="quotation-row-wrap">
            <h3 class="quotation-row-title">Package Name:</h3>
            <div class="quotation-row-desc">
                <ul>
                    {{packageName}}
                </ul>
            </div>
        </div>
        <div class="quotation-row-wrap">
            <h3 class="quotation-row-title">Package Price:</h3>
            <div class="quotation-row-desc">
                <ul>
                    {{packagePrice}}
                </ul>
            </div>
        </div>
        <div class="quotation-row-wrap">
            <h3 class="quotation-row-title">Total Price:</h3>
            <div class="quotation-row-desc">
                <h5 class="quotation-row-link">{{totalPrice}}</h5>
            </div>
        </div>
        <div class="quotation-card-bottom">
            <div class="terms-and-conditions-wrap">
                <span>Terms &amp; Conditions</span>
                <ul>
                    {{termsAndConditions}}
                </ul>
            </div>
        </div>
    </div>
</body>

</html>`