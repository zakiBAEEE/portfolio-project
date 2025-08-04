<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PortfolioItem;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json(PortfolioItem::all());
    }

    public function show($id)
    {
        return response()->json(PortfolioItem::findOrFail($id));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string',
            'type' => 'required|in:article,youtube,code',
            'url' => 'required|url',
            'thumbnail' => 'nullable|url',
        ]);

        $item = PortfolioItem::create($validated);
        return response()->json($item, 201);
    }

    public function update(Request $request, $id)
    {
        $item = PortfolioItem::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string',
            'description' => 'nullable|string',
            'type' => 'sometimes|in:article,youtube,code',
            'url' => 'sometimes|url',
            'thumbnail' => 'nullable|url',
        ]);

        $item->update($validated);
        return response()->json($item);
    }

    public function destroy($id)
    {
        $item = PortfolioItem::findOrFail($id);
        $item->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
