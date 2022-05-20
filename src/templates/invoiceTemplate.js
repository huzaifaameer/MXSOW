module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        
        body{
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            margin: 0px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        }
        *,
        *::before,
        *::after{
            box-sizing: border-box;
        }
        .main-invoice-wrap{
            border: 1px solid rgb(140 198 63);
            padding: 20px;
            margin: 20px;
        }
        .invoice-header{
            display: flex;
            gap: 20px;
            align-items: center;
            border-bottom: 1px solid #d5d5d5;
            margin-bottom: 15px;
        }
        .invoice-header >*{
            width: 100%;
        }
        .invoice-header .logo-wrap img{
            max-width: 100%;
        }
        .text-center{
            text-align: center;
        }
        .data-row{
            display: flex;
            align-items: center;
        }
        .data-col{
            width: 100%;
            flex-grow: 1;
        }
        .data-container{
            margin: 10px 0px;
            border-radius: 15px;
            border: 1px solid #d5d5d5;
            overflow: hidden;
        }
        .data-container-head{
            position: relative;
            padding: 8px;
            font-size: 18px;
        }
        .data-container-body{
            padding: 30px;
        }
        .is-bold{
            font-weight: 700;
        }
        .custom-table{
            font-size: 14px;
            border: 1px solid #d5d5d5;
        }
        .custom-table-row{
            display: flex;
            padding: 0.6em;
            border-top: 1px solid #d5d5d5;
        }
        .custom-table-row:nth-child(even){
            background-color: rgb(0 0 0 / 5%);
        }
        .custom-table-row.is-head{
            background-color: rgb(66 73 73);
            color: #ffffff;
            font-weight: 700;
        }
        .custom-table-col{
            flex-grow: 1;
            width: 100%;
        }
        .custom-table-col.is-double{
            flex-grow: 2;
            width: 200%;
        }

    </style>
</head>
<body>
    <div class="main-invoice-wrap" style="font-size: 15px;">
        <div class="invoice-header">
            <div class="logo-wrap">
                <img src="https://vvmprodstracc.blob.core.windows.net/managex/assets/EmailTemplate/Logo.png" alt="">
            </div>
            <h2 class="text-center">{{Invoice}}</h2>
            <div></div>
        </div>
        <!-- Main Content START HERE -->


        <div class="data-row">
            <div class="data-col">
                <div>
                    <span class="data-text is-bold">Customer Name: </span>
                    <span class="data-text">{{customer name}}</span>
                </div>
                <div>
                    <span class="data-text is-bold">Email: </span>
                    <span class="data-text">{{email}}</span>
                </div>
                <div>
                    <span class="data-text is-bold">Order Date: </span>
                    <span class="data-text">{{order date}}</span>
                </div>
                <div>
                    <span class="data-text is-bold">Quotation Ref: </span>
                    <span class="data-text">{{quotation ref}}</span>
                </div>
            </div>
            <div class="data-col">
                <div>
                    <span class="data-text is-bold">ManageX</span>
                </div>
                <div>
                    <span class="data-text">One Lake Plaza, Office # 1301-02, Cluster T, JLT Dubai, United Arab Emirates</span>
                </div>
                <div>
                    <span class="data-text">+ 971(4)447 4594</span>
                </div>
                <div>
                    <span class="data-text">support@managex.ae</span>
                </div>
            </div>
        </div>


        <div class="data-container">
            <div class="data-container-head" style="background-color: rgb(140 198 63); color:#ffffff">
                <div class="bg"></div>
                Order Summary
            </div>
            <div class="data-container-body">
                <div class="custom-table">
                    <div class="custom-table-row is-head">
                        <div class="custom-table-col is-double">
                            <span>Services Name</span>
                        </div>
                        <div class="custom-table-col">
                            <span>Units</span>
                        </div>
                        <div class="custom-table-col">
                            <span>Unit price</span>
                        </div>
                        <div class="custom-table-col">
                            <span>Total</span>
                        </div>
                    </div>
                    {{package_details}}
                    <div class="custom-table-row">
                        <div class="custom-table-col is-double">
                            <span></span>
                        </div>
                        <div class="custom-table-col">
                            <span></span>
                        </div>
                        <div class="custom-table-col">
                            <span style='font-weight: bold;'>Total</span>
                        </div>
                        <div class="custom-table-col">
                            <span style='font-weight: bold;'>{{total price}} USD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: calc(100% - 20px);margin:15px auto;text-align: center;">
            <h4 style="margin: 0px;">Thank you for using ManageX. Feel free to share your feedback at <a href="mailto:support@managex.ae"> support@managex.ae</a></h4>
            <h4 style="margin: 0px;">All rights reserved © {{year}}</h4>
        </div>
    </div>
</body>
</html>`