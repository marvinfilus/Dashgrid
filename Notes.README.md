Change the lines to this in package.json

 "start": "react-scripts --openssl-legacy-provider start",
 "build": "react-scripts --openssl-legacy-provider build", 

 Also ran (windows version is set)set NODE_OPTIONS=--openssl-legacy-provider (export instead of set on Mac)


  // const { user } = useSession
 Took out of header line 8 


setLoading(true) then false lets it know that it is loading during this function and request.