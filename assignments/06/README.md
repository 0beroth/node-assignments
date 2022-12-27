# Assignment 6: Run a command
* Write a node script that accepts arguments and runs a command, streaming the output to stdio. When the command completes, log whether or not the command completed successfully.

Example (success):
```
$ node answer.js ping -c 4 google.com
PING google.com (142.251.163.102) 56(84) bytes of data.
64 bytes from wv-in-f102.1e100.net (142.251.163.102): icmp_seq=1 ttl=104 time=18.4 ms
64 bytes from wv-in-f102.1e100.net (142.251.163.102): icmp_seq=2 ttl=104 time=19.3 ms
64 bytes from wv-in-f102.1e100.net (142.251.163.102): icmp_seq=3 ttl=104 time=18.4 ms
64 bytes from wv-in-f102.1e100.net (142.251.163.102): icmp_seq=4 ttl=104 time=18.4 ms

--- google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 18.402/18.624/19.261/0.367 ms

command finished successfully
```

Example (fail):
```
$ node answer.js derp
/bin/sh: line 1: derp: command not found

command finished unsuccessfully
```
