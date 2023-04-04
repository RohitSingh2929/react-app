import React, { useState } from "react";


function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdby, setCreatedby] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(localStorage.setItem('Name', name));
    console.log(localStorage.setItem('Description', description));
    console.log(localStorage.setItem('Createdby', createdby));

          
    const form = {name: name , description: description, createdby: createdby}

    const forms = [...blogs];
    if (index === -1) {
      forms.push(form);
    } else {
      forms[index] = form;
      setIndex(-1);
    }
      setBlogs(forms);
      localStorage.setItem("item", JSON.stringify(forms));
      setName("")
      setDescription("")
      setCreatedby("")
  };

  const handleEditBlog = (index) => {
    const blog = blogs[index];
    setName(blog.name);
    setDescription(blog.description);
    setCreatedby(blog.createdby);
    setIndex(index);
  };

  const handleDelete = (index) => {
    const forms = [...blogs];
    forms.splice(index, 1);
    setBlogs(forms);
    localStorage.setItem("blogs", JSON.stringify(forms));
  };

  React.useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("item"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);

  console.log(localStorage.getItem('Name'));
  console.log(localStorage.getItem('Description'));
  console.log(localStorage.getItem('Createdby'));
  
  

  return (
    <div >
    <form onSubmit={handleSubmit} style={{backgroundColor: "lightblue", padding: "20px", margin: "10px"}} >
      <label>Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label><br />
      <label>Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label><br />
      <label>createdby
        <input type="text" value={createdby} onChange={(event) => setCreatedby(event.target.value)} />
      </label><br /><br/>
      <button type="submit">{index === -1 ? "Submit" : "Update"}</button>
    </form>
    <hr/>
    <div>
        {blogs.map((blog,index)=>(
          <div key={index}>
            <h2>Blog!!!!!!</h2>
            <p>{blog.name}</p>
            <p>{blog.description}</p>
            <p>{blog.createdby}</p>
            <button onClick={() => handleEditBlog(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>

 
  );
}
export default Form;