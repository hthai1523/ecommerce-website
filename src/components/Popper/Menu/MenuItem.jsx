import Button from '../../Button';

function MenuItem(data, onClick) {

    return ( <Button className='w-full justify-start font-semibold py-[11px] px-4 text-xl hover:bg-[#16182308]' icon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
    </Button> );
}

export default MenuItem;