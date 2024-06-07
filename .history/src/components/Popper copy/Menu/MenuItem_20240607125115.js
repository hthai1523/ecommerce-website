
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, isDangerous }) {

    const classes = cx('menu-item', {
        separate: data.separate,
        dangerous: isDangerous,
    })

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
