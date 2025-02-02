<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity; // Add this line to import the Activity model

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::all(); // Use the imported Activity model
        return view('index', compact('activities'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:activities,name', // Make sure name is unique
            'description' => 'required'
        ]);

        $activity = Activity::create([
            'name' => $request->name,
            'description' => $request->description
        ]);

        return response()->json($activity, 201);
    }

    public function update(Request $request, $id)
    {
        $activity = Activity::findOrFail($id);

        $request->validate([
            'name' => 'required|unique:activities,name,' . $activity->id, // Allow the existing name to be updated
            'description' => 'required'
        ]);

        $activity->update([
            'name' => $request->name,
            'description' => $request->description
        ]);

        return response()->json($activity);
    }

    public function destroy($id)
    {
        $activity = Activity::find($id);

        if ($activity) {
            $activity->delete();
            return response()->json(['success' => true, 'message' => 'Activity deleted successfully!']);
        } else {
            return response()->json(['success' => false, 'message' => 'Activity not found!']);
        }
    }

    public function show($id)
    {
        $activity = Activity::findOrFail($id);
        return response()->json($activity); 
    }
}