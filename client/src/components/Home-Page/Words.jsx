import React, { useEffect } from 'react'
import { useDencrypt } from "use-dencrypt-effect";
import s from './Words.module.scss';
let options = {
    chars: ['_'],
    interval: 40
}

function Words(props) {
    
    const { result, dencrypt } = useDencrypt(options);
    const values = ['DOPE SHIRTS', 'FRESH KICKS', 'SEXY TOPS', 'HOT DRESSES', 'SLICK JACKETS', 'WEAR YOUR CRWN' ]

    useEffect(() => {
        let i = 0;
        let ms = 2000;
        console.log(result === "")
        const myFunction = () => {
            dencrypt(values[i]);
            
            if (i === values.length - 1) {
                clearInterval(action);
                ms = 15000;
                i = 0;
                action = setInterval(myFunction, ms);
            } else {
                clearInterval(action);
                ms = 5000;
                i = i + 1;
                action = setInterval(myFunction, ms);
            }
        }
        let action = setInterval(myFunction, ms);

        return () => clearInterval(action);
    }, []);

    return (
        <div className={s.wrapper} style={result === "" ? {color: 'white'} : null}>
            {result === "" ? 'CRWN CLOTHING' : result}
        </div>
    )
}
 
export default Words;