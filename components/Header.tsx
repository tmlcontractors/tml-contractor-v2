"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links=[['Home','/'],['About','/about'],['Services','/services'],['Residential','/residential'],['Commercial','/commercial'],['Projects','/projects'],['Contact','/contact']];
export default function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="logo">TML<small>CONTRACTOR</small></Link><nav className="nav">{links.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><div className="header-right"><a className="phone" href="tel:3137290398">(313) 729-0398</a><Link className="btn btn-gold" href="/contact">Request a Free Estimate</Link><button className="menu" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>{open&&<nav className="container" style={{display:'grid',gap:14,padding:'18px 0 24px'}}>{links.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<a href="tel:3137290398">Call (313) 729-0398</a></nav>}</header>}
