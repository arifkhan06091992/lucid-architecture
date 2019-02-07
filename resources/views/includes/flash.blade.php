@if (session('messages'))
    <div class="alert alert-success">
        {{ session('messages') }}
    </div>
@endif