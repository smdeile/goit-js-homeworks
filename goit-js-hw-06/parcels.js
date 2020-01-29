const parcels = {
    orderId: "1213622517",
    channelName: "eBay (vidaxl)",
    orderDate: "2019-06-22T16:22:05",
    trackingCodes: [
        {
            trackingCode: "01475136758133",
            date: "2019-06-24T16:16:16",
            carrier: "DPD",
            handlingUnit: "7000000007596622",
            zipcode: "47166"
        },
        {
            trackingCode: "01475136757837",
            date: "2019-06-24T16:16:16",
            carrier: "DPD",
            handlingUnit: "7000000007594309",
            zipcode: "47166"
        }
    ],
    status: [
        {
            status: "0",
            dateTime: "2019-06-22T16:22:05"
        },
        {
            status: "1",
            dateTime: "2019-06-22T16:22:05"
        },
        {
            status: "2",
            dateTime: "2019-06-22T16:22:05"
        },
        {
            status: "3",
            dateTime: "2019-06-22T16:22:05"
        },
        {
            status: "4",
            dateTime: "2019-06-22T16:22:05"
        }
    ],
    sapOrderId: "1022397086"
}

const carriers = [
    {
        name: "DPD",
        code: "DPD",
        link: "https://tracking.dpd.de/parcelstatus?query=01475136758133&locale=de_DE",
        status: [
            {
                status: "Delivered",
                delivery_time: "2019-06-26T11:43:00"
            }
        ]
    },
    {
        name: "DPD",
        code: "DPD",
        link: "https://tracking.dpd.de/parcelstatus?query=01475136757837&locale=de_DE",
        status: [
            {
                status: "InTransit"
            }
        ]
    }
]