import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
declare class CubeCardSettings extends FormattingSettingsCard {
    scaleMode: formattingSettings.ItemDropdown;
    inertia: formattingSettings.ToggleSwitch;
    defaultZoom: formattingSettings.NumUpDown;
    cellSize: formattingSettings.NumUpDown;
    gap: formattingSettings.NumUpDown;
    heightScale: formattingSettings.NumUpDown;
    opacity: formattingSettings.NumUpDown;
    showControls: formattingSettings.ToggleSwitch;
    keySeparator: formattingSettings.ItemDropdown;
    equalCubes: formattingSettings.ToggleSwitch;
    showValueLabels: formattingSettings.ToggleSwitch;
    labelSize: formattingSettings.NumUpDown;
    labelColor: formattingSettings.ColorPicker;
    preventOverlap: formattingSettings.ToggleSwitch;
    uniformScale: formattingSettings.ToggleSwitch;
    volumeLinear: formattingSettings.ToggleSwitch;
    minCubeRatio: formattingSettings.NumUpDown;
    topDim1: formattingSettings.NumUpDown;
    topDim2: formattingSettings.NumUpDown;
    topDim3: formattingSettings.NumUpDown;
    minColor: formattingSettings.ColorPicker;
    maxColor: formattingSettings.ColorPicker;
    midColor: formattingSettings.ColorPicker;
    colorByZ: formattingSettings.ToggleSwitch;
    sortMode: formattingSettings.ItemDropdown;
    colorMode: formattingSettings.ItemDropdown;
    showLegend: formattingSettings.ToggleSwitch;
    showCubeEdges: formattingSettings.ToggleSwitch;
    edgeWidth: formattingSettings.NumUpDown;
    edgeColor: formattingSettings.ColorPicker;
    edgeOpacity: formattingSettings.NumUpDown;
    edgesOnTop: formattingSettings.ToggleSwitch;
    showFaceKeys: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class ColorsCardSettings extends FormattingSettingsCard {
    colorMode: formattingSettings.ItemDropdown;
    minColor: formattingSettings.ColorPicker;
    midColor: formattingSettings.ColorPicker;
    maxColor: formattingSettings.ColorPicker;
    colorByZ: formattingSettings.ToggleSwitch;
    showLegend: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class LabelsCardSettings extends FormattingSettingsCard {
    axisLabelSize: formattingSettings.NumUpDown;
    axisTextColor: formattingSettings.ColorPicker;
    axisLabelBgColor: formattingSettings.ColorPicker;
    axisLabelBgOpacity: formattingSettings.NumUpDown;
    tickLabelSize: formattingSettings.NumUpDown;
    tickTextColor: formattingSettings.ColorPicker;
    useSvgText: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class BordersCardSettings extends FormattingSettingsCard {
    showCubeEdges: formattingSettings.ToggleSwitch;
    edgeWidth: formattingSettings.NumUpDown;
    edgeColor: formattingSettings.ColorPicker;
    edgeOpacity: formattingSettings.NumUpDown;
    edgesOnTop: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class AdvancedCardSettings extends FormattingSettingsCard {
    showTooltipTotals: formattingSettings.ToggleSwitch;
    sortMode: formattingSettings.ItemDropdown;
    preventOverlap: formattingSettings.ToggleSwitch;
    uniformScale: formattingSettings.ToggleSwitch;
    volumeLinear: formattingSettings.ToggleSwitch;
    minCubeRatio: formattingSettings.NumUpDown;
    topDim1: formattingSettings.NumUpDown;
    topDim2: formattingSettings.NumUpDown;
    topDim3: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    cubeCard: CubeCardSettings;
    colorsCard: ColorsCardSettings;
    labelsCard: LabelsCardSettings;
    bordersCard: BordersCardSettings;
    advancedCard: AdvancedCardSettings;
    axesCard: {
        showAxisInfo: formattingSettings.ToggleSwitch;
        showAxisEdgeLabels: formattingSettings.ToggleSwitch;
        showGridFrame: formattingSettings.ToggleSwitch;
        showAxisTicks: formattingSettings.ToggleSwitch;
        showInnerGrids: formattingSettings.ToggleSwitch;
        showOrientation: formattingSettings.ToggleSwitch;
        ticksBothSides: formattingSettings.ToggleSwitch;
        name: string;
        displayName: string;
        slices: Array<FormattingSettingsSlice>;
        analyticsPane?: boolean;
        onPreProcess?(): void;
        container?: formattingSettings.Container;
        disabled?: boolean;
        disabledReason?: string;
        delaySaveSlices?: boolean;
        collapsible?: boolean;
        visible?: boolean;
        topLevelSlice?: formattingSettings.SimpleSlice;
        displayNameKey?: string;
        description?: string;
        descriptionKey?: string;
    };
    cards: (CubeCardSettings | ColorsCardSettings | LabelsCardSettings | BordersCardSettings | AdvancedCardSettings | {
        showAxisInfo: formattingSettings.ToggleSwitch;
        showAxisEdgeLabels: formattingSettings.ToggleSwitch;
        showGridFrame: formattingSettings.ToggleSwitch;
        showAxisTicks: formattingSettings.ToggleSwitch;
        showInnerGrids: formattingSettings.ToggleSwitch;
        showOrientation: formattingSettings.ToggleSwitch;
        ticksBothSides: formattingSettings.ToggleSwitch;
        name: string;
        displayName: string;
        slices: Array<FormattingSettingsSlice>;
        analyticsPane?: boolean;
        onPreProcess?(): void;
        container?: formattingSettings.Container;
        disabled?: boolean;
        disabledReason?: string;
        delaySaveSlices?: boolean;
        collapsible?: boolean;
        visible?: boolean;
        topLevelSlice?: formattingSettings.SimpleSlice;
        displayNameKey?: string;
        description?: string;
        descriptionKey?: string;
    })[];
}
export {};
