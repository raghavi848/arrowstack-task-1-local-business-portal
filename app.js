
const $ = (id) => document.getElementById(id);
const read = (key) => { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const message = (id, text) => { const el=$(id); if(el) el.textContent=text; };
const validEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const services=[
 ["⌂","Home Cleaning","A fresh, comfortable space with flexible cleaning support.","Home support"],
 ["⚙","Appliance Repair","Practical troubleshooting and repair appointment requests.","Repairs"],
 ["⚡","Electrical Help","Request help for everyday electrical maintenance needs.","Maintenance"],
 ["✧","Website Setup","A simple online presence for a small business or idea.","Digital"]
];
$("serviceCards").innerHTML=services.map(s=>`<article class="service-card"><div class="card-symbol">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p><span class="tag">${s[3]}</span></article>`).join("");
$("requestForm").addEventListener("submit",e=>{e.preventDefault();const name=$("customerName").value.trim(),email=$("customerEmail").value.trim(),service=$("serviceType").value,details=$("requestDetails").value.trim();if(name.length<2||!validEmail(email)||!service||details.length<10){message("formMessage","Please enter a valid name, email, service and details (at least 10 characters).");return;}const id="LBS-"+Math.floor(100000+Math.random()*900000);const requests=read("lbsRequests");requests.push({id,name,email,service,details,status:"Received",created:new Date().toLocaleString()});write("lbsRequests",requests);message("formMessage",`Thank you! Your request ID is ${id}. Save it to track your request.`);e.target.reset();});
$("trackForm").addEventListener("submit",e=>{e.preventDefault();const id=$("trackId").value.trim().toUpperCase();const found=read("lbsRequests").find(r=>r.id===id);$("trackResult").textContent=found?`Status: ${found.status} • Service: ${found.service} • Submitted: ${found.created}`:"No request found. Check the ID and try again.";});
