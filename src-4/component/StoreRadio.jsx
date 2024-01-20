import React,{Component} from "react";
class StoreRadio extends Component{



    showRadios=(label,arr,name,selVal)=>{
        //console.log(selVal)
        return (
            <>
            <label className="form-check-label font-weight-bold">{label}</label>
            {arr.map((opt)=>{
                return <div className="form-check form-check">
                 <input
                className="form-check-input"
                 type="radio"
                 name={name}
                 value={opt}
                 checked={selVal===opt}
                 onChange={this.handleChange}
                 />
                 <label className="form-check-label">{opt}</label>
             </div>
            })}
            </>
        )
    }
   
    handleChange=(e)=>{
        //optionArray optionsel
        let s1={...this.props.optionsSel}
    
        let {currentTarget: input}=e
        s1[input.name]=input.value;
//console.log(input.value)

        this.props.onChangeOption(s1)
    }
   


    render(){
        const {arr,optionsSel}=this.props;
      
         return(<>
         {this.showRadios("Option",arr,"option",optionsSel)}
         </>
         )
    }
}
export default  StoreRadio;