import { Fragment } from "react/jsx-runtime"

function Abc() {
    return "welcome to reactjs"
}

export default Abc

export const Mypage = () => {
    // return "this is my second functionpppppppppppppppppppppppppppppppppppp";
    return (
        <Fragment>
            <p>this is heading</p>
            <h4>sdfhsjdfh</h4>
            <div className="first">this is  my style</div>

        </Fragment>
    )

}


export const Page = () => {
    return "welcome";
}

