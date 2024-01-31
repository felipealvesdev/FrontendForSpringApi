import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

export default function PrivateRoutes() {

    // Must add logical part of this one
    // Need to switch up true whenever login happens and it comes from redux store

    const data = useSelector(state => state.user)
    const isAuthorized = data.token? true : false;

    //const auth = {'token': true}



  return (
    isAuthorized ? <Outlet /> : <Navigate to="/" />
  )
}
