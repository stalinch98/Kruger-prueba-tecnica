import moment from 'moment-timezone';
import 'moment/locale/es';

export const objectIsVoid = (obj: Object) => {
    return (Object.keys(obj).length === 0)
}

export const generteUserName = (nombres: string, apellidos: string) => {
    let randomId = Math.floor(Math.random() * 1000);
    return nombres.split(' ')[0] + '_' + apellidos.split(' ')[0].substring(0, 2) + randomId;
}

export const generatePassword = () => {
    let result = "";
    const abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
    for (let i = 0; i <= 8; i++) {
        const random = Math.floor(Math.random() * abc.length);
        result += abc[random]
    }
    return result;
};

export const contains = (text: string, term: string) => {
    return text.toLowerCase().indexOf(term.toLowerCase()) >= 0;
};

export const dateToYY_MM_DD = (fecha: Date) => {
    return moment(fecha).format('YYYY-MM-DD');
}