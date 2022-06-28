import { React, useState } from 'react';
import a from './sounds/a.mp3'
import b from './sounds/b.mp3'
import c from './sounds/c.mp3'
import d from './sounds/d.mp3'
import e from './sounds/e.mp3'
import f from './sounds/f.mp3'
import g from './sounds/g.mp3'
import h from './sounds/h.mp3'
import i from './sounds/i.mp3'
import j from './sounds/j.mp3'
import k from './sounds/k.mp3'
import l from './sounds/l.mp3'
import m from './sounds/m.mp3'
import n from './sounds/n.mp3'
import o from './sounds/o.mp3'
import p from './sounds/p.mp3'
import q from './sounds/q.mp3'
import r from './sounds/r.mp3'
import s from './sounds/s.mp3'
import t from './sounds/t.mp3'
import u from './sounds/u.mp3'
import v from './sounds/v.mp3'
import w from './sounds/w.mp3'
import x from './sounds/x.mp3'
import y from './sounds/y.mp3'
import z from './sounds/z.mp3'

export default function Letter(props) {

    const [pressed, setPressed] = useState(false);

    const resetPress = () => {
        setTimeout(() => {
            setPressed(false);
        }, 100);
    }

    const handleClick = (key) => {
        setPressed(true);
        switch (key) {
            case 'a':
                let asound = new Audio(a);
                asound.play();
                resetPress();
                break;
            case 'b':
                let bsound = new Audio(b);
                bsound.play();
                resetPress();
                break;
            case 'c':
                let csound = new Audio(c);
                csound.play();
                resetPress();
                break;
            case 'd':
                let dsound = new Audio(d);
                dsound.play();
                resetPress();
                break;
            case 'e':
                let esound = new Audio(e);
                esound.play();
                resetPress();
                break;
            case 'f':
                let fsound = new Audio(f);
                fsound.play();
                resetPress();
                break;
            case 'g':
                let gsound = new Audio(g);
                gsound.play();
                resetPress();
                break;
            case 'h':
                let hsound = new Audio(h);
                hsound.play();
                resetPress();
                break;
            case 'i':
                let isound = new Audio(i);
                isound.play();
                resetPress();
                break;
            case 'j':
                let jsound = new Audio(j);
                jsound.play();
                resetPress();
                break;
            case 'k':
                let ksound = new Audio(k);
                ksound.play();
                resetPress();
                break;
            case 'l':
                let lsound = new Audio(l);
                lsound.play();
                resetPress();
                break;
            case 'm':
                let msound = new Audio(m);
                msound.play();
                resetPress();
                break;
            case 'n':
                let nsound = new Audio(n);
                nsound.play();
                resetPress();
                break;
            case 'o':
                let osound = new Audio(o);
                osound.play();
                resetPress();
                break;
            case 'p':
                let psound = new Audio(p);
                psound.play();
                resetPress();
                break;
            case 'q':
                let qsound = new Audio(q);
                qsound.play();
                resetPress();
                break;
            case 'r':
                let rsound = new Audio(r);
                rsound.play();
                resetPress();
                break;
            case 's':
                let ssound = new Audio(s);
                ssound.play();
                resetPress();
                break;
            case 't':
                let tsound = new Audio(t);
                tsound.play();
                resetPress();
                break;
            case 'u':
                let usound = new Audio(u);
                usound.play();
                resetPress();
                break;
            case 'v':
                let vsound = new Audio(v);
                vsound.play();
                resetPress();
                break;
            case 'w':
                let wsound = new Audio(w);
                wsound.play();
                resetPress();
                break;
            case 'x':
                let xsound = new Audio(x);
                xsound.play();
                resetPress();
                break;
            case 'y':
                let ysound = new Audio(y);
                ysound.play();
                resetPress();
                break;
            case 'z':
                let zsound = new Audio(z);
                zsound.play();
                resetPress();
                break;
            default:
                console.log(key);
                break;
        }
    }

    return (
        <p
            className={pressed ? (`pressed each ${props.letter}`) : (`each ${props.letter}`)}
            onClick={() => handleClick(props.letter)}
        >
            {props.letter}
        </p>
    )
}