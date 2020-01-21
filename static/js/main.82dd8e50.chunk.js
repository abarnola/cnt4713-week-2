(this.webpackJsonpquizme=this.webpackJsonpquizme||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(3),r=n.n(o),i=n(1),h=function(e){var t=Object(s.useState)(!1),n=Object(i.a)(t,2),o=n[0],r=n[1],h={flipCard:{perspective:"800px",height:"100%",width:"100%",cursor:"pointer",transition:"transform 1s",transformStyle:"preserve-3d"},cardFace:{WebkitBackfaceVisibility:"hidden",display:"flex",backfaceVisibility:"hidden",position:"absolute",width:"100%",height:"100%",margin:"auto",borderRadius:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},front:{background:"white"},back:{transform:"rotateY(180deg)",background:"white"},flipped:{transform:"rotateY(180deg)",perspective:"600px",height:"100%",width:"100%",cursor:"pointer",transition:"transform 1s",transformStyle:"preserve-3d"}};return a.a.createElement("div",{style:o?h.flipped:h.flipCard,onClick:function(){r(!o),e.onFlip()}},a.a.createElement("div",{style:Object.assign({},h.cardFace,h.front)},e.children[0]),a.a.createElement("div",{style:Object.assign({},h.cardFace,h.back)},e.children[1]))},c={height:"100%",width:"150px",position:"fixed",zIndex:"1",overflowX:"hidden",alignItems:"center"},l={border:"0",padding:"5px",background:"transparent",font:"inherit",cursor:"pointer"},d=function(e){e.selected;var t=e.numberOfQuestions,n=e.onQuestionClick;return a.a.createElement("div",{style:c},a.a.createElement("div",{style:{textAlign:"center",margin:"10% auto"}},a.a.createElement("h2",null,"Go To"),a.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"-10px"}},function(){for(var e=[],s=1;s<=t;s++)e.push(a.a.createElement("li",{key:s},a.a.createElement("button",{style:l,onClick:n,index:s},"Question #",s)));return e}())))},m=(n(9),[{id:"1",statement:'Suppose the network layer provides the following service. The network layer in the source host accepts a segment of maximum size 1,200 bytes and a destination host address from the transport layer. The network layer then guarantees to deliver the segment to the transport layer at the destination host. Suppose many network application processes can be running at the destination host.\n\n\ta. Design the simplest possible transport-layer protocol that will get application data to the desired process at the destination host. Assume the operating system in the destination host has assigned a 4-byte port number to each running application process.\n\tb. Modify this protocol so that it provides a "return address" to the destination process.\n\n\tc. In your protocols, does the transport layer "have to do anything" in the core of the computer network?',answer:"a. Contruct a protocol that requires a destination address and port from the application. Embed the port in a 4-byte header of each message\n\nb. Add an additional 4-byte header that contains the source port, in order for a message to be returned.\nc. In this protocol, the transport layer would not have to do anything"},{id:"2",statement:"Consider a planet where everyone belongs to a family of six, every family lives in its own house, each house has a unique address, and each person in a given house has a unique name. Suppose this planet has a mail service that delivers letters from source house to destination house. The mail service requires that (1) the letter be in an envelope, and that (2) the address of the destination hosue (and nothing more) be clearly written on the envelope. Suppose each family has a delegate family member who collects and distributes the letters for the other family members. The letters do not necessarily provide any indication of the recipients of the letters.\n\ta. Using the solution to problem #1 as inspiration, describe a protocol that the delegates can use to deliver letters from a sending family member to a receiving family member.\n\tb. In your protocol, does the mail service ever have to open the envelope and examine the letter in order to provide its service?",answer:"a. Family members can give the delegate the letter, the destination hosue address, and the name of the recipient. The delegate will then write the name of the recipient on the top of the letter, puts the letter in an envelope and writes the house address on the envelope. The delegate then sends the letter to the destination house. At the receiving side, the delegate receives the letter, takes the letter out, notes the recipient name, and then gives the letter to the family member whose name is written on the letter.\n\nb. No, the mail service does not have to open the envelope, only look at the address on written on it."},{id:"3",statement:"Consider a TCP Connection betwene Host A and Host B. Suppose that the TCP segments traveling from Host A to Host B have source port number x and destination port number y. What are the source and destination port numbers for the segments traveling from Host B to Host A",answer:"Source port number Y and port number X"},{id:"4",statement:"Describe why an application developer might choose to run an application over UDP rather than TCP",answer:"When sending a large number of short messages, because UDP connections don't need to establish the two-way handshake TCP provides and therefore connections are established in a single RTT rather than the minimum of two that TCP requires."},{id:"5",statement:"Why is it that voice and video traffic is often sent over TCP rather than UDP in today's Internet?",answer:"Most firewalls are configured to block UDP traffic, therefore using TCP for video and voice traffic lets the traffic go through the firewalls."},{id:"6",statement:"Is it possible for an application to enjoy reliable data transfer even when the application runs over UDP? If so, how?",answer:"Yes. The application developer can implement reliable data transfer in the application layer protocol."},{id:"7",statement:"Suppose a process in Host C has a UDP socket with port number 6789. Suppose both Host A and Host B each send a UDP segment to Host C with destination port number 6789. Will both of these segments be directed to the same socket at host C? If so, how will the process at Host C know that these two segments originated from two different hosts?",answer:"Yes, the socket will receive both segments. For each received segment, the process receives the IP address of the sender from the OS, in order to determine the origin of each segment."},{id:"8",statement:"Suppose that a Web server runs in Host C on port 80. Suppose this Web server uses persistent connections, and is currently receiving requests from two different Hosts, A and B. Are all of the requests being sent through the same socket at Host C? If they are being passed through different sockets, do both of the sockets have port 80? Discuss and explain.",answer:"The Web server creates a separate connection socket for each persistent connection. Each connection is identified by a four tuple: (source IP address, source port number, destination IP address, destination port number). When host C receives a message, it examines these four fields in the segment to determine which socket it should pass the payload of the TCP segment. Therfore, the requests from A and B pass through different sockets. Both of these sockets have port 80, but their identifiers have different values for their source IP addresses in order to differentiate them."},{id:"9",statement:"In our RDT protocols, why did we need to introduce sequence numbers?",answer:"In order for the receiver to know whether an arriving packet contains new data or is a retransmission"},{id:"10",statement:"In our RDT protocols, why did we need to introduce timers?",answer:"To handle losses in the channel. If the ACK for a packet is not received within the duration of the timer, the packet is assumed to have been lost."},{id:"11",statement:"Suppose that the roundtrip delay between sender and receiveer is constant and known to the sender. Would a timer still be necessary in protocol RDT 3.0, assuming that packets can be lost? Explain.",answer:"A timer would still be necessary in the protocol of RDT 3.0. If the RTT is known, the only advantage is that the sender knows for sure whether the packet or ACK/NACK for the packet has been lost, as opposed to the scenario where we don't know the RTT, where we cannot be sure that the packet was actually lost, and just assume it was"},{id:"14",statement:"True or False:\n\na. Host A is sending Host B a large file over a TCP connection. Assume Host B has no data to send Host A. Host B will not send acknowledgements to Host A because Host B cannot piggyback the acknowledge on data.\n\tb. Teh sice of the TCP rwnd never changes throughout the duration of the connection\n\tc. Suppose Host A is sending Host B a large file over a TCP connection. The number of unacknowledge bytes that A sends cannot exceed the size of the receive buffer\n\td. Suppose Host A is sending a large file to Host B over a TCP connection. If the sequence number for a segment of this connection is m, then the sequence number for the subsequent segment will necessarily be m+1.\n\te. The TCP segment has a field in its header for rwnd.\n\tf. Suppose that the last SampleRTT in a TCP connection is equal to 1s. The current value of TimeoutInterval for the connection will be necessarily be >=1s\n\tg. Suppose Host A sends one segment with sequence number 38 and 4 bytes of data over a TCP connection to Host B. In this same segment the acknowledgement number is necessarily 42",answer:"a. False\n\nb. False\n\nc. True\n\nd. False\n\ne. True\n\nf. False\n\ng. False"},{id:"15",statement:"Suppose Host A sends two TCP segments back to back to Host B over a TCP connection. The firs segment has sequence number 90, the second has sequence number 110.\n\n\ta. How much data is in the first segment?\n\n\tb. Suppose that the first segment is lost but the second segment arrives at B. In the acknowledgement that Host B sends to Host A, what will be the acknowledgment number?",answer:"a. 20 bytes\n\nb. ack number: 90"},{id:"16",statement:"Consider the Telnet example discussed in Section 3.5. A few seconds after the user types the letter 'C', the user types the letter 'R'. After typing the letter 'R', how many segments are sent, and what is put in the sequence number and acknowledgment fields of the segments?",answer:"Three segments.\n\tFirst segment: seq = 43, ack = 80.\n\tSecond segment: seq = 80, ack=44.\n\tThird segment: seq = 44, ack = 81"},{id:"17",statement:"Suppose two TCP connections are present over some bottleneck link rate of R bps. Both connections have a huge file to send. The transmissions of the files start at the same time. What transmission rate would TCP like to give to each fo the connections",answer:"R/2"},{id:"18",statement:"True or False? Consider congestion control in TCP. When the timer expires at the sender, the value of ssthresh is set to one half of its previous value.",answer:"False. It is set to the current value of the congestion window"},{id:"19",statement:"In the discussion of TCP splitting in the sidebar in section 7.2, it was claimed that the response time with TCP splitting is approximately 4*RTT(FE) + RTT(BE) + processing time. Justify this claim.",answer:"Let X = RTTFE, Y = RTTBE and ST = Search time. Consider the following timing diagram.\n\nTCP Packet exchange diagram between a client and a server with a proxy between them. From this diagram we see that the total time is 4X + Y + ST = 4*RTTFE + RTTBE + ST"}]),u={textAlign:"center",marginTop:"20px",fontSize:"1.15rem",userSelect:"none"},p={visibility:"hidden",cursor:"pointer"},f=function(e){var t=e.current,n=e.total,s=e.onPrevClick,o=e.onNextClick;return a.a.createElement("div",{style:u},1===t?a.a.createElement("i",{style:p,className:"fas fa-arrow-left"}):a.a.createElement("i",{style:{cursor:"pointer"},onClick:s,className:"fas fa-arrow-left"}),"  "," ",t," / ",n," ","  ",t===n?a.a.createElement("i",{style:p,className:"fas fa-arrow-right"}):a.a.createElement("i",{style:{cursor:"pointer"},onClick:o,className:"fas fa-arrow-right"}))},g={cardFace:{whiteSpace:"pre-wrap",backgroundColor:"white",textAlign:"justify",lineHeight:"28px",fontSize:"1rem",padding:"0 50px",margin:"auto"}};var b=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(s.useState)(m[0].statement),c=Object(i.a)(r,2),l=c[0],u=c[1],p=Object(s.useState)(m[0].answer),b=Object(i.a)(p,2),w=b[0],v=b[1],y=Object(s.useState)(!1),T=Object(i.a)(y,2),k=T[0],C=T[1],S=function(e){k?(u(m[e].answer),v(m[e].statement)):(u(m[e].statement),v(m[e].answer))};return a.a.createElement("div",{className:"app"},a.a.createElement("h1",{className:"title"},"QuizMe"),a.a.createElement(d,{numberOfQuestions:m.length,selected:n+1,onQuestionClick:function(e){var t=e.target.attributes.index.value-1;o(t),S(t)}}),a.a.createElement("div",{className:"card-container"},a.a.createElement(h,{onFlip:function(){C(!k)}},a.a.createElement("div",{style:g.cardFace},l),a.a.createElement("div",{style:g.cardFace},w)),a.a.createElement(f,{current:n+1,total:m.length,onNextClick:function(e){o(n+1),S(n+1)},onPrevClick:function(){o(n-1),S(n-1)}})))};r.a.render(a.a.createElement(b,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.82dd8e50.chunk.js.map