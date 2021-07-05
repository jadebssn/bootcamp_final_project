@foreach ($errors->all() as $error)
    <div class="error">{{ $error }}</div>
@endforeach

<form action="{{ route('register') }}" method="post">
    @csrf
    Name:<br>
    <input type="text" name="name" value="{{ old('name') }}"><br>
    Email:<br>
    <input type="email" name="email" value="{{ old('email') }}"><br>
    Password:<br>
    <input type="password" name="password" value=""><br>
    Retype password:<br>
    <input type="password" name="password_confirmation" value=""><br>
    <br>
    <button>Register</button>
</form>
