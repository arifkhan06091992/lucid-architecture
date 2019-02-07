<?php

namespace App\Data\Repositories;
use App\Data\Category;

/**
 * Base Repository.
 */
class CategoryRepository extends Repository
{
    /**
     * The model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    public $model;

    public function __construct()
    {
        $this->model = new Category();
        parent::__construct($this->model);
    }
}