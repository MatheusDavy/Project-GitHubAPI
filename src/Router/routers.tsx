import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { DefaultLayout } from '../layouts/default'
import { Home } from '../Pages/Home'
import { UserDescribe } from '../Pages/UserDescribe'

export function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout />}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/user/:userId' element={<UserDescribe />}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}