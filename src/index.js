import numeral from 'numeral';

import './index.css'

const priceValue = numeral(1000).format('$0,0.00');
console.log(`Let pay the amount ${priceValue}`);
