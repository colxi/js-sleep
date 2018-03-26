/*
* @Author: colxi
* @Date:   2018-03-25 15:53:37
* @Last Modified by:   colxi
* @Last Modified time: 2018-03-25 16:58:34
*/

'use strict'
function sleep(ms){ return new Promise( resolve => setTimeout( resolve , ms ) ) }
if(typeof module !== 'undefined') module.exports = sleep;

