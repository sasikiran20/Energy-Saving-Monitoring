<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Revolution\Google\Sheets\Facades\Sheets;

class TestController extends Controller
{
    public function index()
    {
        $getrange = 'A:I';
        $values = Sheets::spreadsheet(env('post_spreadsheet_id'))
            ->sheet("A:I")
            ->all();


        $output = [];

        unset($values[0]);

        $values = Collection::make($values);

        $values = $values->groupBy(function ($value) {
            return $value[1];
        });


        $backgroundColor = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ];

        $borderColor =  [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ];

        $i = 0;

        $sums = Collection::make([]);

        $averages = Collection::make([]);

        $total_savings = 0;

        foreach ($values as $key => $value) {
            $data = $value->pluck(4);
            $array = $data->toArray();
            $output[] = [
                'label' => $key,
                'data' => $array,
                'borderColor'=> $borderColor[$i],
                'backgroundColor'=> $backgroundColor[$i],
                'largest_usage' => $data->max(),
                'average_usage' => $data->avg(),
                'total_usage' => $data->sum(),
                'peaks' => array_keys($array, $data->max())
            ];

            $averages->add($data->avg());

            foreach ($array as $inner_key => $item) {
                $sums[$inner_key] = ($sums[$inner_key] ?? 0) + $item;
            }

            $i++;
        }

        $only_values = array_reverse(array_values($values->toArray()));
        $only_values_col = Collection::make($only_values);
        foreach ($only_values_col as $key => $value) {
            if ($key === (count($values) - 1)) {
                break;
            }

            $total_savings += (array_sum((Collection::make($only_values_col[$key + 1]))->pluck(4)->toArray()) - array_sum(Collection::make($value)->pluck(4)->toArray())) > 0 ?  array_sum((Collection::make($only_values_col[$key + 1]))->pluck(4)->toArray()) - array_sum(Collection::make($value)->pluck(4)->toArray()) : 0;
        }

        $total_trees = ($total_savings * 0.85) / 0.05;

        $peak_indexes = array_keys($sums->toArray(), $sums->max());
        $average = $averages->avg();

        return [
            'data' => $output,
            'peaks' => $peak_indexes,
            'average' => $average,
            'total_trees' => $total_trees,
            'total_savings' => $total_savings
        ];
    }

    public function index1()
    {
        $getrange = 'A:I';
        $values = Sheets::spreadsheet('1MikSxYCtDdiu_H9GnIUtBzz8WugnmFoXnCR_U8LtifQ')
            ->sheet("A:I")
            ->all();

        $output = [];

        $values = Collection::make($values);

        $values = $values->groupBy(function ($value) {
            return $value[0];
        });


        $backgroundColor = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ];

        $borderColor =  [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ];

        $i = 0;

        $sums = Collection::make([]);

        $averages = Collection::make([]);

        $time = Carbon::now()->startOfDay();

        $labels = [];

        while(!$time->isTomorrow()) {
            $labels[] = $time->toTimeString();
            $time = $time->addMinutes(30);
        }

        foreach ($values as $key => $value) {
            $data = $value->pluck(4);
            $array = [0];

            $time = Carbon::now()->startOfDay();
            $index = 0;

            while(!$time->isTomorrow()) {

                $current_sum = 0;
                $current_count = 0;
                if ($index !== null){
                    try {
                        $current_ts = Carbon::createFromTimeString($value[$index][1])->toTimeString();

                        while ($current_ts > $time->toTimeString() && $current_ts < $time->clone()->addMinutes(30)->toTimeString()) {
                            $current_sum += $value[$index][3] < 3 ? 0 : $value[$index][3];
                            $current_count ++;
                            $index ++;
                            $current_ts = Carbon::createFromTimeString($value[$index][1])->toTimeString();
                        }
                    } catch (\ErrorException $e) {
                        $index = null;
                    }
                }

                $time = $time->addMinutes(30);

                if ($current_count > 1) {
                    $array[] = $current_sum / $current_count;
                } else {
                    $array[] = $current_sum;
                }
            }

            $output[] = [
                'label' => $key,
                'data' => $array,
                'borderColor'=> $borderColor[$i],
                'backgroundColor'=> $backgroundColor[$i],
                'largest_usage' => $data->max(),
                'average_usage' => $data->avg(),
                'total_usage' => $data->sum(),
                'peaks' => array_keys($array, $data->max())
            ];

            $averages->add($data->avg());

            foreach ($array as $inner_key => $item) {
                $sums[$inner_key] = ($sums[$inner_key] ?? 0) + $item;
            }

            $i++;
        }

//        $peak_indexes = array_keys($sums->toArray(), $sums->max());
//        $average = $averages->avg();

        return [
            'labels' => $labels,
            'data' => $output,
//            'peaks' => $peak_indexes,
//            'average' => $average,
        ];
    }
}
