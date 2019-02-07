<?php

namespace App\Services\Web\Http\Controllers;

use App\Services\Web\Features\CreateTaskFeature;
use App\Services\Web\Features\DeleteTaskFeature;
use App\Services\Web\Features\EditTaskFeature;
use App\Services\Web\Features\ListTasksFeature;
use App\Services\Web\Features\StoreTaskFeature;
use App\Services\Web\Features\UpdateTaskFeature;
use Illuminate\Http\Request;
use Lucid\Foundation\Http\Controller;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->serve(ListTasksFeature::class);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return $this->serve(CreateTaskFeature::class);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->serve(StoreTaskFeature::class);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return $this->serve(EditTaskFeature::class);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return $this->serve(UpdateTaskFeature::class);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->serve(DeleteTaskFeature::class);
    }
}
