<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(User::all());

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'photo' => 'nullable|image|max:2048',
            'headline' => 'nullable|string',
            'description' => 'nullable|string',
            'experience' => 'nullable|string',
            'skills' => 'nullable|string', // Bisa JSON juga
            'social_media' => 'nullable|array',
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('user_photos', 'public');
            $validated['photo'] = asset('storage/' . $path);
        }

        $user = User::create($validated);
        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $id)
    {
        return response()->json(User::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string',
            'photo' => 'nullable|image|max:2048',
            'headline' => 'nullable|string',
            'description' => 'nullable|string',
            'experience' => 'nullable|string',
            'skills' => 'nullable|string',
            'social_media' => 'nullable|array',
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('user_photos', 'public');
            $validated['photo'] = asset('storage/' . $path);
        }

        $user->update($validated);
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
