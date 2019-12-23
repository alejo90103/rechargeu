<?php
return array(
    // set your paypal credential
    'client_id' => 'ASjQJ-5LQ275glB04KrYrSc-PuBpVa78XPxXD5FNqj8h0MebA5GkhlR2FOlv6EwaJwM9UIMqHnv-GnZu',
    'secret' => 'EIdDf2aSQSQn-GlRiwef4m7bZ1glK-NK_PrSC1ZFWNu3LTtuj5M2Zz7WxgTaBLVdaPpEuMj9MezOus56',
    /**
     * SDK configuration
     */
    'settings' => array(
        /**
         * Available option 'sandbox' or 'live'
         */
        'mode' => 'sandbox',
        /**
         * Specify the max request time in seconds
         */
        'http.ConnectionTimeOut' => 30,
        /**
         * Whether want to log to a file
         */
        'log.LogEnabled' => true,
        /**
         * Specify the file that want to write on
         */
        'log.FileName' => storage_path() . '/logs/paypal.log',
        /**
         * Available option 'FINE', 'INFO', 'WARN' or 'ERROR'
         *
         * Logging is most verbose in the 'FINE' level and decreases as you
         * proceed towards ERROR
         */
        'log.LogLevel' => 'FINE'
    ),
);
