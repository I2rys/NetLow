//Dependencies
const Request = require("request")
const Delay = require("delay")

//Variables
const Self_Args = process.argv.slice(2)

var NetLow_Data = {}
NetLow_Data.requests = 0
NetLow_Data.failed_requests = 0
NetLow_Data.request_again_delay = 0
NetLow_Data.initiate_delay = 0

//Functions
async function Initiate_A_Requester(){
    await Delay(request_again_delay)

    Request("https://example.com", function(err, res, body){
        if(err){
            NetLow_Data.failed_requests += 1
            Initiate_A_Requester()
            return
        }

        NetLow_Data.requests += 1
        Initiate_A_Requester()
        return
    })
}

//Main
if(Self_Args.length == 0){
    console.log("Invalid amount of request per seconds.")
    process.exit()
}

if(isNaN(Self_Args[0])){
    console.log("Request per seconds is not an Int.")
    process.exit()
}

for( i = 0; i <= Self_Args[0]; i++){

    Initiator()
    async function Initiator(){
        await Delay(NetLow_Data.initiate_delay)

        Initiate_A_Requester()
    }
}

setInterval(function(){
    console.clear()
    console.log(`====== NetLow Stat ======
Requests: ${NetLow_Data.requests}
Failed requests: ${NetLow_Data.failed_requests}`)
}, 100)
