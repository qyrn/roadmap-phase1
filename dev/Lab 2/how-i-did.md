01 Service Directory : curl http://localhost:7373/flag/1

02 Header Hunt : curl -v http://localhost:7373/flag/2

03 Method Matters : curl -X POST -H "Content-Type: application/json" -d "{\"method\":\"POST\"}" http://localhost:7373/flag/3

04 Virtual Host : curl -H "Host: lab2.local" http://localhost:7373/flag/4

05 Subnet Calc : Pas réussi