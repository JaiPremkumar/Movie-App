import Button from "react-bootstrap/esm/Button";

export default function Pagination({totalPage,postPage,setPage}){

    let page=[];

    for(let i=1;i<=Math.ceil(totalPage/postPage);i++){
        page.push(i)
    }

    return(
        <div className="m-2">
        {
            page.map((page,index)=>(
                <Button key={index} onClick={()=>setPage(page)}>{page}</Button>
            ))
        }
        </div>
    )
}