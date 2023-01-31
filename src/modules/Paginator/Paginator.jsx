import s from "./Paginator.module.scss"

const Paginator = ({currentPage, setCurrentPage}) => {
    const pageCount = [1,2,3];

    return (
        <div className={s.root}>
            <button className={s.button} onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : ''} >Назад</button>
            {pageCount.map(page => <div className={page === currentPage ? s.active : s.item} onClick={() => setCurrentPage(page)} >{page}</div>)}
            <button className={s.button} onClick={() => currentPage < pageCount.length ? setCurrentPage(currentPage + 1) : ''}>Вперёд</button>
        </div>
    );
}

export default Paginator;