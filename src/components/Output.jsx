export default function Output({fullName,title,email,number,jobs,exp}){
    return(
        <>
        <header>
            <div className="heading">
            {fullName}
            <div className="title" id="title">{title}</div>
            </div>
            <section className="sub-heading">
                <div id="email">{email}</div>
                <div id="number">{number}</div>
                <div id="jobs">{jobs}</div>
                <div id = "exp">{exp}</div>
            </section>
        </header>
        
        </>
       
    )
}