/**
 * author: jialin
 * date: 2020/05/03
 * desc: search component
 */
 import React, { useState } from 'react';
 import { Fragment } from 'react';
 import { 
   Input,
   Button,
   Form,
   FormGroup,
   Row
 } from 'reactstrap';
 
 const Search = props => {
     const { defaultKeywords, placeholder, search, addButton, addFunction, buttonText } = props;
     const [keywords, setKeywords] = useState("");
 
     const searchInput = event => {
       setKeywords(event.target.value);
     }
 
     return (
         <Fragment>
           <Row className="pb-0 pl-4 pb-2">
             <FormGroup className="mr-sm-2 mb-sm-0 col-sm-6 col-md-6 col-lg-6 pl-0">
               <Input
                 className="col-sm-12 col-md-12 col-lg-12"
                 id="SearchInput"
                 name="SearchInput"
                 onChange={(event) => searchInput(event)}
                 placeholder={placeholder}
                 defaultValue={defaultKeywords?defaultKeywords:''}
               />
             </FormGroup>
             <Button 
               onClick={() => search(keywords)}
               color="primary"
             >
                 Search
             </Button>
             {
              addButton ? 
              <Button 
                className="ml-4"
                onClick={() => addFunction()}
                color="primary"
              >
                 {buttonText}
               </Button>
               :
               null
             }
           </Row>         
         </Fragment>
       );
 }
 
 export default Search;
 