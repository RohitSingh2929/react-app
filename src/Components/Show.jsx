import React from "react"
import {  Link } from "react-router-dom";


const Show =() => {
    return(
        <><ul>
            <li>
                <Link to="/blog1">Blogs 1</Link>
            </li>
        </ul><ul>
                <li>
                    <Link to="/blog2">Blogs 2</Link>
                </li>
            </ul><ul>
                <li>
                    <Link to="/blog3">Blogs 3</Link>
                </li>
            </ul><ul>
                <li>
                    <Link to="/blog4">Blogs 4</Link>
                </li>
            </ul></>
    );
};

export default Show;


