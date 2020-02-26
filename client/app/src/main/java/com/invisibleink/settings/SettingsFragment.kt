package com.invisibleink.settings

import android.os.Bundle
import androidx.preference.PreferenceFragmentCompat
import com.invisibleink.R

class SettingsFragment : PreferenceFragmentCompat() {

    override fun onCreatePreferences(savedInstanceState: Bundle?, rootKey: String?) {
        setPreferencesFromResource(R.xml.settings, rootKey)
    }
}
