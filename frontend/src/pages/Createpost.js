import { useState } from 'react';
import Api from '../components/Api';
import Home from './Home';

export default function Createpost() {

    const {http} = Api();
    const [title, setTitle] = useState();
    const [errortitle, setTitleerror] = useState();
    const [description, setDescription] = useState();
    const [errordescription, setDescriptionerror] = useState();

    const [loader, setLoader] = useState('off');

    const submitForm = () => {
        setLoader('on');
        http.post('/createpost', {title:title, description:description}).then(res => {
            
            if(res.data.status == 422) {
                setTitleerror(res.data.error.title);
                setDescriptionerror(res.data.error.description);
            } else {
                console.log("yay");
            }
            setLoader('off');
        });
        
    }

    return(
        <>
            <div className="container mt-5">
                <h3 className="text-center">Create Post</h3>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} placeholder="Mexico" />
                    <span className='text-danger'>{errortitle}</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)} rows="3"></textarea>
                    <span className='text-danger'>{errordescription}</span>
                </div>
                <button type="button" onClick={submitForm} className="btn btn-primary w-100">
                    {
                        loader === 'off' &&
                        <span>Publish Now</span>
                    }
                    {
                        loader === 'on' &&
                        <center>
                            <div class="spinner-border spinner-border-sm" role="status"></div>
                        </center>
                    }
                </button>
            </div>
        </>
    );
}