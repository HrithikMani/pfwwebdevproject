import "../css/Login.css"


function Login(){
    return (
        <>
 
    <section class="form-section">
        <h1 class="homepage-heading">Talent Acquisition Hub</h1>   
        <form>
            <input type="text" placeholder="Username/Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" class="cyan-button">Sign In</button>
        </form>
        <p class="white-link">Don't have an account? <a href="signup.html" class="white-link">Sign up here</a></p>
    </section>
        </>
    )
}
export default Login