import React, { useState } from "react";

function ConvertCase() {

    const [mytext, setMyText] = useState('');



    //1.lowerCase
    const LowerCase = () => {
        let newText = mytext.toLowerCase();
        setMyText(newText);
    }

    //2.CapitalizeText
    const CapitalizeText = () => {
        // let newText=mytext.charAt(0).toUpperCase() + mytext.slice(1);
        let newText = mytext.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
        // console.log(newText)
        setMyText(newText);
    }


    //3.UpperCase
    const UpperCase = () => {
        let newText = mytext.toUpperCase();
        setMyText(newText);
    }
    //4.Reverese text

    const ReverseCase = () => {
        let newText = mytext.split('').reverse().join('');
        setMyText(newText);
    }




    //5.clear text
    const Clear = () => {
        setMyText('');
    }

    //onchange Event
    const Onchange = (event) => {
        setMyText(event.target.value)
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center heading mt-5">ConvertCase </h1>
            <div className="line"></div>
            <form>
                <div className="mb-3">
                    <textarea className="form-control mt-5" id="exampleFormControlTextarea1"
                        onChange={Onchange} value={mytext} rows="8"></textarea>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button type="button" className="btn btn-primary me-3"
                        onClick={LowerCase}>lower case</button>

                    <button type="button" className="btn btn-primary  me-3"
                        onClick={CapitalizeText}>Capitalize </button>

                    <button type="button" className="btn btn-primary  me-3"
                        onClick={UpperCase}>UPPER CASE</button>

                    <button type="button" className="btn btn-primary  me-3"
                        onClick={ReverseCase}>Reverse</button>

                    <button type="button" className="btn btn-primary  me-3"
                        onClick={Clear}>Clear</button>

                </div>
            </form>
            <div className="mt-5">
                <h1 className="text-center">Calculate length of Word and character</h1>
                <h1 className="text-center head">{mytext.split(" ").length} word and {mytext.length} character</h1>
            </div>
        </div>
    )
}
export default ConvertCase;