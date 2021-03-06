import React from 'react';
import styles from './Criminals.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
const Criminals = ({criminals, selectedIndex, selectCriminal}) => {
    return (
        <>
        <div className={styles.text}>피고인을 선택하세요</div>
        <ul className={styles.criminallist}>
           {criminals.map(criminal =>(
               <li 
                key={criminal.key} 
                className={cx('criminal',{selected: selectedIndex === criminal.key})} 
                style={{backgroundImage: 
                    "url("+criminal.imgurlc+")"}}
                >
                    <div className={styles.summarybox}>
                       피고인: {criminal.criminal}<br/>
                        특징: {criminal.summary}
                   </div>
                   <button 
                    type="button" 
                    className={cx('button',{selected: selectedIndex === criminal.key})} 
                    onClick={selectCriminal}
                    name={criminal.key}
                   >
                   </button>
                   
               </li>
           ))}
        </ul>
        </>
    );
};

export default Criminals;