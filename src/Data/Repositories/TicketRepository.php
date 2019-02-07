<?php

namespace App\Data\Repositories;
use App\Data\Ticket;

/**
 * Base Repository.
 */
class TicketRepository extends Repository
{
    /**
     * The model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    public $model;

    public function __construct()
    {
        $this->model = new Ticket();
        parent::__construct($this->model);
    }
}